import { createStyles, Burger, Menu, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { NavLink } from './types';

const useStyles = createStyles((theme) => ({
  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

interface Props {
  links: NavLink[];
}

export const HeaderMenu = ({ links }: Props) => {
  const { classes } = useStyles();
  const [opened, { toggle, close }] = useDisclosure(false);

  const menuLinks = links.map((link) => (
    <Menu.Item>
      <Text component={Link} to={link.url} color="blue" onClick={close}>
        {link.name}
      </Text>
    </Menu.Item>
  ));

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Burger className={classes.burger} opened={opened} onClick={toggle} size="sm" />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Links</Menu.Label>
        {menuLinks}
      </Menu.Dropdown>
    </Menu>
  );
};
