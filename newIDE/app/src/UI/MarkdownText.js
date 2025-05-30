// @flow
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { I18n } from '@lingui/react';
import { type MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
import classNames from 'classnames';
import Window from '../Utils/Window';

// Sensible defaults for react-markdown
const makeMarkdownCustomComponents = (
  isStandaloneText: boolean,
  allowParagraphs: boolean,
  withTextEllipsis: boolean
) => ({
  // Ensure link are opened in a new page
  a: props =>
    props.href ? (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={event => {
          event.preventDefault(); // Avoid triggering the href (avoids a warning on mobile in case of unsaved changes).
          Window.openExternalURL(props.href);
        }}
      >
        {props.children}
      </a>
    ) : (
      props.children
    ),
  // Add paragraphs only if we explicitly opt in.
  p: props => {
    // Hack to make sure an indent is added to isolated piece of markdown
    // that starts with a tab character. Used for the premium courses that include
    // list items with a long indented text separated by an image.
    const shouldFakeListItem =
      props.children && props.children[0] && props.children[0][0] === '\t';
    if (
      withTextEllipsis &&
      !(
        props.node.position.start.line === 1 &&
        props.node.position.start.column === 1 &&
        props.node.position.start.offset === 0
      )
    ) {
      // Display first paragraph only if text ellipsis is requested.
      return null;
    }
    return isStandaloneText || allowParagraphs ? (
      shouldFakeListItem ? (
        <ul className="generated-list-item">
          <li>
            <p>{props.children}</p>
          </li>
        </ul>
      ) : (
        <p>{props.children}</p>
      )
    ) : (
      props.children
    );
  },
  // eslint-disable-next-line jsx-a11y/alt-text
  img: ({ node, ...props }) => <img style={{ display: 'flex' }} {...props} />,
});

type Props = {|
  source?: string,
  translatableSource?: MessageDescriptor,
  isStandaloneText?: boolean,
  allowParagraphs?: boolean,
  /**
   * Props to display only the first line of content.
   */
  withTextEllipsis?: boolean,
|};

/**
 * Display a markdown text
 */
export const MarkdownText = (props: Props) => {
  const markdownCustomComponents = React.useMemo(
    () =>
      makeMarkdownCustomComponents(
        props.isStandaloneText || false,
        props.allowParagraphs || false,
        props.withTextEllipsis || false
      ),
    [props.isStandaloneText, props.allowParagraphs, props.withTextEllipsis]
  );

  const markdownElement = (
    <I18n>
      {({ i18n }) => (
        <ReactMarkdown
          components={markdownCustomComponents}
          remarkPlugins={[remarkGfm]}
        >
          {props.translatableSource
            ? i18n._(props.translatableSource)
            : props.source}
        </ReactMarkdown>
      )}
    </I18n>
  );

  const className = classNames({
    'gd-markdown': true,
    'standalone-text-container': props.isStandaloneText,
    'text-ellipsis': props.withTextEllipsis,
  });

  return props.isStandaloneText ? (
    <div className={className}>{markdownElement}</div>
  ) : (
    <span className={className}>{markdownElement}</span>
  );
};
