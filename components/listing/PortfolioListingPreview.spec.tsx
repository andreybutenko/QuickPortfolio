import { cleanup, queryByText, render } from '@testing-library/react';
import { IPortfolio } from 'models/data';
import PortfolioListingPreview from './PortfolioListingPreview';

afterEach(cleanup);

const MOCK_PORTFOLIO = {
  id: 'abc-123',
  meta: {
    modifyTime: 'yesterday',
  },
  content: {
    title: 'my portfolio title',
  },
} as IPortfolio;

describe('PortfolioPreview', () => {
  it('PortfolioPreview renders expected content', () => {
    const { queryByTestId } = render(
      <PortfolioListingPreview portfolio={MOCK_PORTFOLIO} />
    );

    const portfolioPreview = queryByTestId(
      `portfolio-preview-${MOCK_PORTFOLIO.id}`
    ) as HTMLElement;
    expect(portfolioPreview).toBeTruthy();
    expect(
      queryByText(portfolioPreview, MOCK_PORTFOLIO.content.title)
    ).toBeTruthy();
    expect(
      queryByText(portfolioPreview, MOCK_PORTFOLIO.meta.modifyTime, {
        exact: false,
      })
    ).toBeTruthy();
    expect(
      queryByText(portfolioPreview, 'View Portfolio', {
        selector: `a[href="/portfolio/${MOCK_PORTFOLIO.id}"]`,
      })
    ).toBeTruthy();
  });
});
