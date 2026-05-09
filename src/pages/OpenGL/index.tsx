import { useEffect, useMemo, useRef, useState } from "react";
import { Layout, Menu, MenuProps, theme } from "antd";
import { componentMap, menuItems, allKeys } from "./config";

const { Sider, Content } = Layout;

const GL = () => {
  const [selectedKey, setSelectedKey] = useState("ssao");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const instanceRef = useRef<unknown>(null);
  const { token } = theme.useToken();

  const selectedComponent = useMemo(
    () => componentMap[selectedKey],
    [selectedKey],
  );

  useEffect(() => {
    if (canvasRef.current) {
      if (instanceRef.current) {
        const inst = instanceRef.current as { destroy?: () => void };
        inst.destroy?.();
        instanceRef.current = null;
      }
      instanceRef.current = new selectedComponent(canvasRef.current);
    }
    return () => {
      if (instanceRef.current) {
        const inst = instanceRef.current as { destroy?: () => void };
        inst.destroy?.();
        instanceRef.current = null;
      }
    };
  }, [selectedComponent]);

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    if (componentMap[key]) {
      setSelectedKey(key);
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        width={220}
        theme="dark"
        style={{ overflowY: "auto", background: "#000" }}
      >
        <div
          style={{
            padding: "16px 16px 8px",
            color: "#ffffff",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Category
        </div>
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[selectedKey]}
          openKeys={allKeys}
          items={menuItems}
          onClick={handleMenuClick}
          style={{ borderInlineEnd: "none", background: "#000" }}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: token.colorBgContainer,
          }}
        >
          <canvas
            style={{ height: "100%", width: "100%" }}
            ref={(v) => (canvasRef.current = v)}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default GL;
