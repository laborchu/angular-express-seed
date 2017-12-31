import e = require('express');
import BaseRoutes from "./base.routes";
import { router } from "../decorators/Web";

class CenterRuotes extends BaseRoutes {
        @router({
                method: 'post',
                path: '/api/web'
        })
        async doCmd(req: any, res: any) {
                res.send({});
        }
}

export default CenterRuotes
