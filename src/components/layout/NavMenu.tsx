import React from "react";
import { Menu, Icon } from "antd";
import { NavLink, Link } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";
import Auth from "../api/ApiAuth";

interface INavMenuProps { }

interface INavMenuState {
    isAuthenticated: boolean;
}

export default class NavMenu extends React.Component<
  INavMenuProps,
  INavMenuState
> {
    private _subscription: number | undefined;

    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {
            isAuthenticated: Auth.isAuthenticated
        };
    }

    render() {
        const { isAuthenticated } = this.state;

    const LoginMenu = !isAuthenticated
      ? this.anonymousView()
      : this.authenticatedView();

        return (
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
                style={{ lineHeight: "64px" }}
            >
                <Menu.Item key="home">
                    <NavLink to="/">
                        <Icon type="home" />
                        Home
                    </NavLink>
                </Menu.Item>
                {/* ----------------------- Wen Code Start -------------------------- */}
                <Menu.Item key="comments">
                    <NavLink to="/comments">Comments</NavLink>
                </Menu.Item>
                <Menu.Item key="feedback">
                    <NavLink to="/feedback">Feedback</NavLink>
                </Menu.Item>
                <Menu.Item key="offers">
                    <NavLink to="/offers">Offers</NavLink>
                </Menu.Item>
                <Menu.Item key="faq">
                    <NavLink to="/faq">FAQ</NavLink>
                </Menu.Item>
        <Menu.Item key="education">
          <NavLink to="/education/overview">Education</NavLink>
        </Menu.Item>
        <SubMenu title="Legal">
                <Menu.Item key="privacy">
                    <NavLink to="/legal/privacy">Privacy</NavLink>
                </Menu.Item>
                <Menu.Item key="terms">
                    <NavLink to="/legal/terms">Terms</NavLink>
                </Menu.Item>
                <Menu.Item key="disclaimer">
                    <NavLink to="/legal/disclaimer">Disclaimer</NavLink>
                </Menu.Item>
        </SubMenu>
                {/* ----------------------- Wen Code End -------------------------- */}
                <Menu.Item key="fetch-data">
                    <NavLink to="/fetch-data">Test Api</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/articles">Articles</NavLink>
                </Menu.Item>
                <SubMenu title="Forms">
                    <Menu.Item key="register">
                        <NavLink to="/forms/register">User Register</NavLink>
                    </Menu.Item>
                    <Menu.ItemGroup title="Investor">
                        <Menu.Item key="add-bank">
                            <Link to="/forms/investor/bank">Add Bank</Link>
                        </Menu.Item>
                        <Menu.Item key="add-credit-card">
                            <Link to="/forms/investor/credit">Add Credit Card</Link>
                        </Menu.Item>
                        <Menu.Item key="inverstor-verified">
                            <Link to="/forms/investor/verified">Get Verified</Link>
                        </Menu.Item>
                        <Menu.Item key="questionary">
                            <Link to="/forms/investor/questionary">Questionary</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Issuer">
                        <Menu.Item key="issuer-offer">
                            <Link to="/forms/issuer/offer">New Offer</Link>
                        </Menu.Item>
                        <Menu.Item key="issuer-verified">
                            <Link to="/forms/issuer/verified">Get Verified</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                {isAuthenticated && (
                    <Menu.Item key="dash">
                        <NavLink to="/dash">Dashboard</NavLink>
                    </Menu.Item>
                )}
                {LoginMenu}
            </Menu>
        );
    }

    anonymousView(): JSX.Element {
        return (
            <Menu.Item key="login">
                <NavLink className="text-dark" to="/account/login">
                    Login
                </NavLink>
            </Menu.Item>
        );
    }

    authenticatedView(): JSX.Element {
        return (
            <SubMenu title="My Account" {...this.props}>
                <Menu.Item key="welcome">
                    <NavLink className="text-dark" to="/account/profile">
                        Profile
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="logout">
                    <NavLink className="text-dark" to="/account/logout">
                        Logout
                    </NavLink>
                </Menu.Item>
            </SubMenu>
        );
    }
}