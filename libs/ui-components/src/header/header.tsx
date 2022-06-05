import { createUseStyles } from 'react-jss'
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const classes = useStyles()
  console.log('worked')

  return (
    <div className={classes.header}>
      <h1>This is a Header component from ui-components</h1>
    </div>
  );
}

const useStyles = createUseStyles({
  header: {
    backgroundColor: '#f00',
  }
})

export default Header;
