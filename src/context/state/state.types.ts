import { IFullPageAdData } from "./../../global/types";
import { Dispatch } from "react";
// ==================
// ENUMS

// ==================
// INTERFACES

// Top level
export interface IApp {
  fullPageAdData?: IFullPageAdData;
  conversationId?: string;
  isChatReady: boolean;
}

// Misc.
export interface IAppAction {
  type: string;
  payload: any;
}

export interface IAppContext {
  state: IApp;
  dispatch: Dispatch<any>;
}
