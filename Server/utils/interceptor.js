module.exports = {
    mockRequest: () => {
        const req = {};
        req.body = jest.fn().mockReturnValue(req);
        req.params = jest.fn().mockReturnValue(req);
        return req;
    },

    mockResponse: () => {
        const res = {};
        res.send = jest.fn().mockReturnValue(res);
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
    },
    mockNext: () => jest.fn()
}

// Mock to obiekt, którego używa się zamiast rzeczywistej implementacji w trakcie testów jednostkowych. Pozwala on na określenie jakich interakcji spodziewamy się w trakcie testów