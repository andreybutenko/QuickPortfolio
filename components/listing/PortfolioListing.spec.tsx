import {
  cleanup,
  fireEvent,
  queryByText,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react';
import { IPortfolio } from 'models/data';
import { act } from 'react-test-renderer';
import { isUndefined } from 'utils';
import { PortfolioApiClient } from 'utils/clients';
import PortfolioListing from './PortfolioListing';

afterEach(cleanup);

const PORTFOLIO_PREFIX = 'portfolio-preview';
const MOCK_PORTFOLIO_IDS_PAGE_1 = ['portfolio-1', 'portfolio-2'];
const MOCK_PORTFOLIO_IDS_PAGE_2 = ['portfolio-3', 'portfolio-4'];

describe('PortfolioPreview', () => {
  it('PortfolioListing loads data as expected', async () => {
    // Mock the PortfolioApiClient list call for testing
    const listPortfolioMock = jest
      .spyOn(PortfolioApiClient.prototype, 'list')
      .mockImplementation(async (paginationToken) => {
        const toMockPortfolio = (id: string) =>
          ({ id, meta: {}, content: {} } as IPortfolio);
        if (isUndefined(paginationToken)) {
          return {
            portfolios: MOCK_PORTFOLIO_IDS_PAGE_1.map(toMockPortfolio),
            paginationToken:
              MOCK_PORTFOLIO_IDS_PAGE_1[MOCK_PORTFOLIO_IDS_PAGE_1.length - 1],
          };
        }

        return {
          portfolios: MOCK_PORTFOLIO_IDS_PAGE_2.map(toMockPortfolio),
          paginationToken: undefined,
        };
      });

    const { queryByTestId, queryByText } = render(<PortfolioListing />);
    // Since data loading is asynchronous, we need to wait for it
    await waitFor(() => {
      MOCK_PORTFOLIO_IDS_PAGE_1.forEach((id) =>
        expect(queryByTestId(`${PORTFOLIO_PREFIX}-${id}`)).toBeTruthy()
      );
    });

    // After initial load
    expect(listPortfolioMock).toHaveBeenCalledTimes(1);
    expect(listPortfolioMock).toHaveBeenCalledWith(undefined);
    MOCK_PORTFOLIO_IDS_PAGE_1.forEach((id) =>
      expect(queryByTestId(`${PORTFOLIO_PREFIX}-${id}`)).toBeTruthy()
    );
    const initialLoadButton = queryByText('Load Portfolios');
    expect(initialLoadButton).toBeTruthy();

    // Load additional content
    act(() => {
      initialLoadButton?.dispatchEvent(
        new MouseEvent('click', { bubbles: true })
      );
    });

    // Since data loading is asynchronous, we need to wait for it
    await waitFor(() => {
      MOCK_PORTFOLIO_IDS_PAGE_2.forEach((id) =>
        expect(queryByTestId(`${PORTFOLIO_PREFIX}-${id}`)).toBeTruthy()
      );
    });

    // After second load
    expect(listPortfolioMock).toHaveBeenCalledTimes(2);
    expect(listPortfolioMock).toHaveBeenCalledWith(
      MOCK_PORTFOLIO_IDS_PAGE_1[MOCK_PORTFOLIO_IDS_PAGE_1.length - 1]
    );
    MOCK_PORTFOLIO_IDS_PAGE_1.forEach((id) =>
      expect(queryByTestId(`${PORTFOLIO_PREFIX}-${id}`)).toBeTruthy()
    );
    MOCK_PORTFOLIO_IDS_PAGE_2.forEach((id) =>
      expect(queryByTestId(`${PORTFOLIO_PREFIX}-${id}`)).toBeTruthy()
    );
    expect(queryByText('All portfolios are loaded')).toBeTruthy();
  });
});
