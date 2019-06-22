import React from 'react'
import { connect } from 'react-redux'
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, NavSearchBox
} from "./style";

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo href="/" />
            <Nav>
                <NavItem className="fl active">首页</NavItem>
                <NavItem className="fl">下载App</NavItem>
                <NavItem className="fr">登陆</NavItem>
                <NavItem className="fr"><span className="iconfont">&#xe636;</span></NavItem>
                <NavSearchBox className={ props.focused ? "focused" : ""}>
                    <span className="iconfont">&#xe615;</span>
                    <NavSearch onFocus={props.changeFocus} onBlur={props.changeFocus}/>
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
};

let mapStateToProps = (state)=>{
      return {
          focused: state.header.focused
      }
};
let mapDispatchToProps = (dispatch)=>{
    return {
        changeFocus(){
            const action = {
                type: "change_focus"
            };
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)
