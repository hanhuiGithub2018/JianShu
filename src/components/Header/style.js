import styled from 'styled-components'
import logoPic from '../../static/images/jianshu-logo.png'

//header 容器
const HeaderWrapper = styled.div `
    width: 100%;height: 56px; position: relative;
    border-bottom:1px solid #f0f0f0;
`;
//简书logo
const Logo = styled.a `
    width:100px;height:56px;display:block
    position: absolute;left:50px;right:0;
    background: url(${logoPic}) no-repeat center center;
    background-size:cover
`;
//中间导航
const Nav = styled.div `
    width:100%;height:100%;padding:0 260px;
`;
//导航按钮
const NavItem = styled.a `
    line-height: 56px;padding: 0 15px;font-size: 16px;
    &.fr{
        color: #969696
    }
    &.active{
        color:#ea6f5a
    }
`;
//搜索框
const NavSearchBox = styled.div`
    width: 240px;height: 38px;float: left;
    margin: 9px 0 0 20px; position: relative;
    transition: width .2s linear;
    .iconfont{
        position: absolute;top: 9px; right: 13px
    }
    &.focused{
        width: 300px;
    }
`;

const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
  width: 100%;height: 38px;line-height: 38px;padding:0 40px 0 20px;color: #666;
  border: none;border-radius: 19px;font-size: 14px;background: #eee;
  &::placeholder{
    color: #666
  }
`;
//按钮容器
const Addition = styled.div`
    width: auto;min-width: 100px;height: 56px;
    position: absolute; right: 50px;top: 0; 
`;
//注册与写文章
const Button = styled.div`
    margin: 9px 20px 0 0;padding: 0 20px;line-height: 38px;font-size: 14px
    border-radius: 19px; border:1px solid #ec6149;
    &.reg{
        color: #ec6149;
    }
    &.write{
        color: #fff;background: #ec6149;
    }
`;

export {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, NavSearchBox
}
