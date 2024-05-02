import * as n from "./style";
import Hlogo from "../../../assets/hlogo.svg";
import Select from "../../../assets/select.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { NAV_ITEM } from "./constant";
import NavProfile from "./NavProfile";
import { useState } from "react";
import React from "react";

const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isCommunityClicked, setIsCommunityClicked] = useState(false);

  return (
    <n.NavContainer>
      <n.NavTopWrap onClick={() => navigate("/")}>
        <n.NavTitle src={Hlogo} />
      </n.NavTopWrap>
      <NavProfile />
      <n.NavMidWrap>
        {NAV_ITEM.map((item) => (
          <React.Fragment key={item.link}>
            {item.title === "커뮤니티" ? (
              <n.NavCategoryBox
                isMatch={pathname === item.link ? true : false}
                onClick={() => {
                  setIsCommunityClicked(!isCommunityClicked);
                  navigate("/post");
                }}
              >
                {pathname === item.link ? (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <img height={40} src={Select} alt="err" />
                  </span>
                ) : null}
                <img src={item.icon} alt={item.title} />
                {item.title}
              </n.NavCategoryBox>
            ) : (
              <n.NavCategoryBox
                isMatch={pathname === item.link ? true : false}
                onClick={() => navigate(item.link)}
              >
                {pathname === item.link ? (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <img height={40} src={Select} alt="err" />
                  </span>
                ) : null}
                <img src={item.icon} alt={item.title} />
                {item.title}
              </n.NavCategoryBox>
            )}
            {isCommunityClicked &&
            item.title === "커뮤니티" &&
            item.subItems ? (
              <React.Fragment>
                {item.subItems.map((subItem) => (
                  <n.SubCategoryBox
                    isMatch={pathname === subItem.link ? true : false}
                    key={subItem.link}
                    onClick={() => navigate(subItem.link)}
                  >
                    {pathname === subItem.link ? (
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      />
                    ) : null}
                    {subItem.title}
                  </n.SubCategoryBox>
                ))}
              </React.Fragment>
            ) : null}
          </React.Fragment>
        ))}
      </n.NavMidWrap>
    </n.NavContainer>
  );
};

export default Nav;