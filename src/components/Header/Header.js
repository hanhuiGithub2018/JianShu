import React, {Component} from 'react'
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, NavSearchBox
} from "./style";


class Header extends Component {
    render(){
        return (
            <HeaderWrapper>
                <Logo href="/"></Logo>
                <Nav>
                    <NavItem className="fl active">首页</NavItem>
                    <NavItem className="fl">下载App</NavItem>
                    <NavItem className="fr">登陆</NavItem>
                    <NavItem className="fr"><span className="iconfont">&#xe636;</span></NavItem>
                    <NavSearchBox className="fl">
                        <span className="iconfont">&#xe615;</span>
                        <NavSearch></NavSearch>
                    </NavSearchBox>

                </Nav>
                <Addition>
                    <Button className="fr write">
                        <span className="iconfont mgr-3">&#xe61b;</span>
                        写文章
                    </Button>
                    <Button className="fr reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header
