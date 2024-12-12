declare global {
  interface LoginData {
    username: string;
    password: string;
  }

  interface LoginResult {
    access_token: string;
  }

  interface UserAccount {
    uid: string;
    username: string;
    role: Role;
    status: number;
    createTime?: string;
    updateTime?: string;
  }

  interface UserFormModel {
    username?: string;
    password?: string;
    role?: string;
  }

  interface Role {
    key: string;
    name: string;
    createTime?: string;
    updateTime?: string;
  }

  interface RoleFormModel {
    key?: string;
    name?: string;
    parent?: string;
  }

  interface Menu {
    key: string;
    name: string;
    parent?: string;
    createTime?: string;
    updateTime?: string;
    status?: number;
    children?: Menu[];
  }

  interface MenuFormModel {
    key?: string;
    name?: string;
    parent?: string;
  }
}

export {};
