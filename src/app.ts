import { app, BrowserWindow } from 'electron';
import Main from './gui/electron-main';

Main.main(app, BrowserWindow);