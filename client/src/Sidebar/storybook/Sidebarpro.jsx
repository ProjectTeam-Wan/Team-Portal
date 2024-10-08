import React from "react"
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses } from "react-pro-sidebar"
import { Switch } from "./components/Switch"
import { SidebarHeader } from "./components/SidebarHeader"
import { Diamond } from "./icons/Diamond"
import { BarChart } from "./icons/BarChart"
import { Global } from "./icons/Global"
import { InkBottle } from "./icons/InkBottle"
import { Book } from "./icons/Book"
import { Calendar } from "./icons/Calendar"
import { ShoppingCart } from "./icons/ShoppingCart"
import { Service } from "./icons/Service"
import { SidebarFooter } from "./components/SidebarFooter"
import { Badge } from "./components/Badge"
import { Typography } from "./components/Typography"
import { PackageBadges } from "./components/PackageBadges"
import Homepage from "../../pages/Homepage"
import { Link } from "react-router-dom"
import './sidebarpro.css'
import { FaCat, FaTable } from "react-icons/fa";
import { MdOutlineBorderColor } from "react-icons/md";




const themes = {
  light: {
    sidebar: {
      backgroundColor: "#ffffff",
      color: "#607489"
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#0098e5",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e"
      },
      disabled: {
        color: "#9fb6cf"
      }
    }
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7"
    },
    menu: {
      menuContent: "#082440",
      icon: "#59d0ff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9"
      },
      disabled: {
        color: "#3e5e7e"
      }
    }
  }
}

// hex to rgba converter
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const Sidebarpro = () => {
  const [collapsed, setCollapsed] = React.useState(false)
  const [toggled, setToggled] = React.useState(false)
  const [broken, setBroken] = React.useState(false)
  const [rtl, setRtl] = React.useState(false)
  const [hasImage, setHasImage] = React.useState(false)
  const [theme, setTheme] = React.useState("light")

  // handle on RTL change event
  const handleRTLChange = e => {
    setRtl(e.target.checked)
  }

  // handle on theme change event
  const handleThemeChange = e => {
    setTheme(e.target.checked ? "dark" : "light")
  }

  // handle on image change event
  const handleImageChange = e => {
    setHasImage(e.target.checked)
  }

  const menuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 550
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color
      }
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9"
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(
            themes[theme].menu.menuContent,
            hasImage && !collapsed ? 0.4 : 1
          )
          : "transparent"
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color
      },
      "&:hover": {
        backgroundColor: hexToRgba(
          themes[theme].menu.hover.backgroundColor,
          hasImage ? 0.8 : 1
        ),
        color: themes[theme].menu.hover.color
      }
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined
    })
  }

  return (

    <Sidebar
      collapsed={collapsed}
      toggled={toggled}
      onBackdropClick={() => setToggled(false)}
      onBreakPoint={setBroken}
      rtl={rtl}
      breakPoint="md"
      backgroundColor={hexToRgba(
        themes[theme].sidebar.backgroundColor,
        hasImage ? 0.9 : 1
      )}
      rootStyles={{
        color: themes[theme].sidebar.color
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >

        <SidebarHeader
          rtl={rtl}
          style={{ marginBottom: "24px", marginTop: "16px" }}
        />
        <div style={{ flex: 1, marginBottom: "32px" }}>


          <div
            style={{
              padding: "0 24px",
              marginBottom: "8px",
              marginTop: "32px"
            }}
          >
            <Typography
              variant="body2"
              fontWeight={600}
              style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: "0.5px" }}
            >
              Cats
            </Typography>
          </div>
          <Menu menuItemStyles={menuItemStyles}>
            <Link to="/catconf" style={{ textDecoration: 'none' }}>

              <MenuItem
                icon={<FaCat />}
              >
                Cat Configuration Creator
              </MenuItem>
            </Link>
          </Menu>
          <Menu menuItemStyles={menuItemStyles}>
            <Link to="/catsTable" style={{ textDecoration: 'none' }}>
              <MenuItem
                icon={<FaTable />
                }
              >
                Cats Table
              </MenuItem>
            </Link>
          </Menu>
          <Menu menuItemStyles={menuItemStyles}>
            <Link to="/orders" style={{ textDecoration: 'none' }}>
              <MenuItem
                icon={<MdOutlineBorderColor />
                }
              >
                Orders
              </MenuItem>
            </Link>
          </Menu>

          <br></br>

          <div style={{ padding: "0 24px", marginBottom: "8px" }}>
            <Typography
              variant="body2"
              fontWeight={600}
              style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: "0.5px" }}
            >
              General
            </Typography>
          </div>
          <Menu menuItemStyles={menuItemStyles}>
            <SubMenu
              label="Charts"
              icon={<BarChart />}
              suffix={
                <Badge variant="danger" shape="circle">
                  6
                </Badge>
              }
            >
              <MenuItem> Pie charts</MenuItem>
              <MenuItem> Line charts</MenuItem>
              <MenuItem> Bar charts</MenuItem>
            </SubMenu>
            <SubMenu label="Maps" icon={<Global />}>
              <MenuItem> Google maps</MenuItem>
              <MenuItem> Open street maps</MenuItem>
            </SubMenu>
            <SubMenu label="Theme" icon={<InkBottle />}>
              <MenuItem> Dark</MenuItem>
              <MenuItem> Light</MenuItem>
            </SubMenu>
            <SubMenu label="Components" icon={<Diamond />}>
              <MenuItem> Grid</MenuItem>
              <MenuItem> Layout</MenuItem>
              <SubMenu label="Forms">
                <MenuItem> Input</MenuItem>
                <MenuItem> Select</MenuItem>
                <SubMenu label="More">
                  <MenuItem> CheckBox</MenuItem>
                  <MenuItem> Radio</MenuItem>
                </SubMenu>
              </SubMenu>
            </SubMenu>
            <SubMenu label="E-commerce" icon={<ShoppingCart />}>
              <MenuItem> Product</MenuItem>
              <MenuItem> Orders</MenuItem>
              <MenuItem> Credit card</MenuItem>
            </SubMenu>
          </Menu>

          <div
            style={{
              padding: "0 24px",
              marginBottom: "8px",
              marginTop: "32px"
            }}
          >
            <Typography
              variant="body2"
              fontWeight={600}
              style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: "0.5px" }}
            >
              Extra
            </Typography>
          </div>

          <Menu menuItemStyles={menuItemStyles}>
            <MenuItem
              icon={<Calendar />}
              suffix={<Badge variant="success">New</Badge>}
            >
              Calendar
            </MenuItem>
            <MenuItem icon={<Book />}>Documentation</MenuItem>
            <MenuItem disabled icon={<Service />}>
              Examples
            </MenuItem>
          </Menu>
        </div>

      </div>
    </Sidebar>






  )
}
