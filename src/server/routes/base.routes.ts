import e = require('express');

enum RespCode {
	SESSION_OUT=2,
	SUCCESS=1,
	FAIL=0
}

class BaseRoutes {

	wrapperRes(data: any) {
		return { code: RespCode.SUCCESS, data: data };
	}

	wrapperErrorRes(msg: string) {
		return { code: RespCode.FAIL, msg: msg };
	}

	aotoRoute(req: e.Request, res: e.Response) {
	}
}

export default BaseRoutes