const routes = [
  [
    {
      tid: "1",
      pid: "0",
      path: "/login",
      name: "login",
      roles: ["admin", "agent", "mainaccount", "subaccount", "root"],
      component: resolve => require(["../views/login.vue"], resolve),
      children: []
    },
    {
      tid: "2",
      pid: "0",
      path: "/error",
      name: "error",
      roles: ["admin", "agent", "mainaccount", "subaccount", "root"],
      component: resolve => require(["../components/error.vue"], resolve),
      children: []
    },
    {
      tid: "3",
      pid: "0",
      path: "/hello",
      name: "Hello",
      roles: ["admin", "agent", "mainaccount", "subaccount", "root"],
      component: resolve => require(["../components/Hello.vue"], resolve),
      children: []
    },
    {
      tid: "4",
      pid: "0",
      path: "/activate",
      name: "activate",
      roles: ["agent", "mainaccount", "subaccount", "root"],
      component: resolve => require(["../views/activate.vue"], resolve),
      children: []
    },
    {
      tid: "5",
      pid: "0",
      path: "/index",
      name: "index",
      roles: ["admin", "mainaccount", "subaccount", "root"],
      component: resolve => require(["../components/Home.vue"], resolve),
      children: [
        {
          tid: "6",
          pid: "5",
          path: "/index",
          name: "index",
          roles: ["admin", "agent", "mainaccount", "subaccount", "root"],
          component: resolve => require(["../views/index.vue"], resolve),
          children: []
        },
        {
          tid: "7",
          pid: "5",
          path: "/user",
          name: "user",
          roles: ["admin", "agent", "mainaccount", "subaccount", "root"],
          component: resolve => require(["../views/user.vue"], resolve),
          children: []
        },
        {
          tid: "8",
          pid: "5",
          path: "/companyDetail/index",
          name: "companyDetail",
          roles: ["admin", "agent", "subaccount", "root"],
          component: resolve =>
            require(["../views/companyDetail/index.vue"], resolve),
          children: []
        },
        {
          tid: "9",
          pid: "5",
          path: "/risk",
          name: "risk",
          roles: ["admin", "agent", "mainaccount", "subaccount", "root"],
          component: resolve => require(["../views/risk/index.vue"], resolve),
          children: [
            {
              tid: "10",
              pid: "9",
              path: "list",
              name: "list",
              roles: ["admin", "agent", "mainaccount", "subaccount", "root"],
              component: resolve =>
                require(["../views/risk/list.vue"], resolve),
              children: []
            },
            {
              tid: "11",
              pid: "9",
              path: "dynamic",
              name: "dynamic",
              roles: ["admin", "agent", "subaccount", "root"],
              component: resolve =>
                require(["../views/risk/dynamic.vue"], resolve),
              children: []
            }
          ]
        },
        {
          tid: "12",
          pid: "5",
          path: "/management/favorites",
          name: "favorites",
          roles: ["admin", "agent", "mainaccount", "subaccount", "root"],
          component: resolve =>
            require(["../views/management/favorites.vue"], resolve),
          children: []
        },
        {
          tid: "13",
          pid: "5",
          path: "/management/group",
          name: "group",
          roles: ["agent", "subaccount", "root"],
          component: resolve =>
            require(["../views/management/group.vue"], resolve),
          children: []
        },
        {
          tid: "14",
          pid: "5",
          path: "/notice",
          name: "notice",
          roles: ["admin", "mainaccount", "subaccount", "root"],
          component: resolve => require(["../views/notice/index.vue"], resolve),
          children: [
            {
              tid: "15",
              pid: "14",
              path: "system",
              name: "system",
              roles: ["admin", "agent", "mainaccount", "root"],
              component: resolve =>
                require(["../views/notice/system.vue"], resolve),
              children: []
            },
            {
              tid: "16",
              pid: "14",
              path: "consume",
              name: "consume",
              roles: ["admin", "agent", "mainaccount", "subaccount", "root"],
              component: resolve =>
                require(["../views/notice/consume.vue"], resolve),
              children: []
            },
            {
              tid: "17",
              pid: "14",
              path: "profession",
              name: "profession",
              roles: ["admin", "agent", "mainaccount", "subaccount", "root"],
              component: resolve =>
                require(["../views/notice/profession.vue"], resolve),
              children: []
            }
          ]
        },
        {
          tid: "18",
          pid: "5",
          path: "/account",
          name: "account",
          roles: ["admin", "agent", "subaccount", "root"],
          component: resolve =>
            require(["../views/account/index.vue"], resolve),
          children: [
            {
              tid: "19",
              pid: "18",
              path: "agentInfo",
              name: "agentInfo",
              roles: ["admin", "agent", "mainaccount", "subaccount", "root"],
              component: resolve =>
                require(["../views/account/agentInfo.vue"], resolve),
              children: []
            },
            {
              tid: "20",
              pid: "18",
              path: "baseInfo",
              name: "baseInfo",
              roles: ["admin", "agent", "mainaccount", "subaccount", "root"],
              component: resolve =>
                require(["../views/account/baseInfo.vue"], resolve),
              children: []
            },
            {
              tid: "21",
              pid: "18",
              path: "personalInfo",
              name: "personalInfo",
              roles: ["admin", "agent", "mainaccount", "subaccount", "root"],
              component: resolve =>
                require(["../views/account/personalInfo.vue"], resolve),
              children: []
            },
            {
              tid: "22",
              pid: "18",
              path: "trade",
              name: "trade",
              roles: ["admin", "agent", "mainaccount", "subaccount", "root"],
              component: resolve =>
                require(["../views/account/trade.vue"], resolve),
              children: []
            }
          ]
        }
      ]
    },
    {
      tid: "23",
      pid: "0",
      path: "*",
      name: "all",
      roles: ["admin", "agent", "mainaccount", "subaccount", "root"],
      component: resolve => require(["undefined"], resolve),
      children: []
    }
  ]
];

export default routes;
