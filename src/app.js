import page from "../node_modules/page/page.mjs";
import { renderNavigationMiddleware , renderContentMiddleware } from "./middlewares/renderMiddleWares.js";
import { homeView } from "./views/homeView.js";

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page('/',homeView);


page.start();