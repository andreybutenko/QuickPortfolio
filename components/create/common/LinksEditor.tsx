import { Stack } from '@mui/material';
import { ILink } from 'models/data';
import { useMemo } from 'react';
import { StyledTextField, StyledButton } from 'components/create/Styled';

type LinksEditorProps = {
  links: ILink[];
  setLinks: (newLinks: ILink[]) => void;
};

/**
 * LinksEditor component allows users to add, remove, and edit
 * @param props
 * @returns
 */
const LinksEditor = (props: LinksEditorProps) => {
  const { links, setLinks } = props;
  const lastLink = useMemo(() => links[links.length - 1], [links]);

  // Can only add link if last link is filled in
  const addButtonEnabled = useMemo(
    () => !lastLink || (lastLink.label !== '' && lastLink.url !== ''),
    [lastLink]
  );

  const isValidUrl = (url: string) => url.startsWith('https://');

  const onAddLink = () => {
    setLinks([
      ...links,
      {
        label: '',
        url: '',
      },
    ]);
  };

  const onRemoveLink = (removeIndex: number) => {
    const newLinks = links.filter((link, index) => index !== removeIndex);
    setLinks(newLinks);
  };

  const onChangeLinkLabel = (updateIndex: number, newLabel: string) => {
    const newLinks = links.map((link, index) =>
      index === updateIndex ? { ...link, label: newLabel } : link
    );
    setLinks(newLinks);
  };

  const onChangeLinkUrl = (updateIndex: number, newUrl: string) => {
    const newLinks = links.map((link, index) =>
      index === updateIndex ? { ...link, url: newUrl } : link
    );
    setLinks(newLinks);
  };

  return (
    <div>
      <Stack direction="column">
        {links.map((link, index) => {
          return (
            <Stack direction="row" key={index}>
              <StyledTextField
                label={'Label'}
                onChange={(element) => {
                  onChangeLinkLabel(index, element.target.value);
                }}
                value={links[index].label}
              />
              <StyledTextField
                label={'URL'}
                onChange={(element) => {
                  onChangeLinkUrl(index, element.target.value);
                }}
                value={links[index].url}
                error={!isValidUrl(links[index].url)}
              />
              <StyledButton variant="text" onClick={() => onRemoveLink(index)}>
                Remove Link
              </StyledButton>
            </Stack>
          );
        })}

        <StyledButton
          variant="outlined"
          onClick={() => onAddLink()}
          disabled={!addButtonEnabled}
          style={{ maxWidth: '595px' }}
        >
          Add Link
        </StyledButton>
      </Stack>
    </div>
  );
};

export default LinksEditor;
