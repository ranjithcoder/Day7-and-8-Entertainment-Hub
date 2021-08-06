import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { Movie, Search, Tv, Whatshot } from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom:0,
    backgroundColor: '#2d313a',
    zIndex:1000,
  },
})

export default function SimpleBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: '#fff' }}
        label='Trending'
        icon={<Whatshot />}
      />
      <BottomNavigationAction
        style={{ color: '#fff' }}
        label='Movies'
        icon={<Movie />}
      />
      <BottomNavigationAction
        style={{ color: '#fff' }}
        label='Series'
        icon={<Tv />}
      />
      <BottomNavigationAction
        style={{ color: '#fff' }}
        label='Search'
        icon={<Search />}
      />
    </BottomNavigation>
  )
}