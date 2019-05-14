<template>
    <div class="container">
        <em id="custom_display_1" class="milogo">
            <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="3" ry="3" style="fill:#ff6700"></rect><rect x="10" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect>
                <rect x="33.75" y="15" width="4.2" height="18" style="fill:#FFFFFF"></rect><rect x="11.25" y="15" width="15" height="4.1" style="fill:#FFFFFF"></rect>
                <rect x="26.2" y="20.55" width="4.2" height="12.5" style="fill:#FFFFFF"></rect><rect x="20.6" y="15" width="9.8" height="9.8" rx="4.4" ry="4.4" style="fill:#FFFFFF"></rect>
                <rect x="20.2" y="19" width="6" height="6" rx="2" ry="2" style="fill:#ff6700"></rect><rect x="18" y="19.1" width="4" height="2.2" style="fill:#ff6700"></rect>
                <rect x="24.2" y="23" width="1.94" height="10" style="fill:#ff6700"></rect><rect x="18.1" y="22.8" width="4.2" height="10.2" style="fill:#FFFFFF"></rect>
            </svg>
        </em>
        <div style="margin-bottom:20px;">小米账号登录</div>
        <div class="account">
            <!-- <span>&nbsp&nbsp+86&nbsp&nbsp></span> -->
            <input type="text" placeholder="手机号码">
        </div>
        <div class="keyword">
            <input type="text" placeholder="短信验证码">
            <span>获取验证码</span>
        </div>
        <div class="login">立即登陆/注册</div>
        <div class="other">用户名密码登录</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .container {
        width: 374px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        em {
            width: 48px;
            height: 48px;
            margin-top: 28px;
            margin-bottom: 15px;
        }
        .account,.keyword {
            border-bottom: 1px solid #d3d3d3;
            width: 100%;
            height: 54px;
            line-height: 54px;
            font-size: 17px;
            color: rgba(160,160,160);
            input {
                width: 290px;
                height: 45px;
                border: none;
                line-height: 45px;
                font-size: 18px;
                margin-left: 18px;
                color: rgba(160,160,160);
                &:focus {
                    border: none;
                }
            }
        }
        .keyword {
            input {
                width: 250px; 
            }
        }
        .login {
            width: 100%;
            height: 45px;
            margin-top: 30px;
            text-align: center;
            line-height: 45px;
            background: #ff6700;
            color: white;
            font-size: 18px;
            border-radius: 6px;
        }
        .other {
            width: 100%;
            height: 45px;
            margin-top: 30px;
            text-align: center;
            line-height: 45px;
            color: #ff6700;
            font-size: 18px;
            border-radius: 6px;
            border: 1px solid #d3d3d3;
        }
    }
</style>
