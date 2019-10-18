import React from 'react';
import { Menu } from 'antd';
import '../../assets/css/layout.css';

interface MenuItem {
    name: string;
    mark: string;
};


const APP_MENUS: MenuItem[] = [
    { name: "NEWS", mark: "#news" },
    { name: "WHAT WE DO", mark: "#services" },
    { name: "WHY US", mark: "#why-us" },
    { name: "RESEARCH", mark: "#research" },
    { name: "MEET THE TEAM", mark: "#team" },
    { name: "CONTACT", mark: "#contact" }
];

export const HomeMenu: React.FunctionComponent = () => {
    const [transparent, setTransparent] = React.useState(true)
    // console.log(window.pageYOffset);

    window.addEventListener('scroll', (ev: Event) => {
        setTransparent(window.pageYOffset < 64);
    });

    return (
        <Menu
            theme="dark"
            id='menubar'
            mode="horizontal"
            defaultSelectedKeys={['home']}
            className={transparent ? 'nav' : 'nav2'}
        >
            <Menu.Item key="home" style={{ color: "#f1592a", fontSize: "1.5em", backgroundColor: "#0000" }}>BRITE Investments</Menu.Item>
            {APP_MENUS.map((menu: MenuItem) => (
                <Menu.Item key={menu.name}>
                    <a onClick={
                        () => {
                            const obj = document.getElementById(menu.mark.slice(1));
                            const pos: number = obj ? obj.offsetTop : 0;
                            // console.log('HomeMenu', pos);
                            window.scrollTo({ top: pos, behavior: 'smooth' });
                        }
                    }>{menu.name}</a>
                    {/* <NavLink to={menu.mark}>{menu.name}</NavLink> */}
                </Menu.Item>
            ))}
        </Menu>
    )
}

