import {test,expect} from "../../fixtures/api.fixture";
import {AuthApi} from "../../api/clients/auth.api";

test('Create Token successfully', async({apiContext}) =>{
    //Dùng apiContext đã setup sẵn để gọi API lấy token
    const authApi = new AuthApi(apiContext);
    const token = await authApi.getToken();
    expect(token).toBeTruthy();
});