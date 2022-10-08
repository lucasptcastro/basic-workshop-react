import { Breadcrumb, Card, Layout, Menu, Typography } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Head from "next/head";
import React from "react";

const App: React.FC = () => (
  <Layout className="layout">
    {/* TITULO DA PAGINA */}
    <Head>
      <title>WORKSHOP</title>
    </Head>

    {/* HEADER */}
    <Header>
      <Typography.Text
        className="flex flex-row justify-center"
        style={{ color: "white" }}
      >
        WORKSHOP REACT
      </Typography.Text>
    </Header>

    {/* CONTEUDO */}
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }} separator=">">
        <Breadcrumb.Item href="https://github.com/lucasptcastro">
          <Typography.Text className="opacity-80 hover:text-blue-600">
            Repositório
          </Typography.Text>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>

      <Typography.Text>Conteúdo da API aqui</Typography.Text>
    </Content>

    {/* FOOTER */}
    <Footer style={{ textAlign: "center" }}>
      Workshop React ©2022 Created by Senac Labs
    </Footer>
  </Layout>
);

export default App;
