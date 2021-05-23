export interface Info {
  name: string;
  role: string;
  email: string;
  password: string;
}

export interface Privacy {
  update: boolean;
  communication: boolean;
}
export interface User {
  info: Info;
  privacy: Privacy;
  done: boolean;
  error: string[];
}
export interface State {
  user: User;
}
