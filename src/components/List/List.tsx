import React from 'react';
import styles from './List.module.scss';

export interface ListProps {
  /**
   * How large should the list be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * List contents
   * @ignore
   */
  children: React.ReactNode;
  /**
   * Provide your custom styles by passing a class name that will
   * be applied to the root of the component (edit to match reality)
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  disablePadding?: boolean;

  /**
   * If you want a scrollable list instead of scrolling the entire screen
   */
  scrollable?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const List = ({
  size = 'medium',
  className = '',
  disablePadding = false,
  scrollable = false,
  children,
  ...props
}: ListProps) => {
  const classes = [
    styles.wrapper,
    disablePadding ? '' : styles.padding,
    scrollable ? styles.scroll : '',
    className,
  ]
    .join(' ')
    .trim();
  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  );
};

export default List;
