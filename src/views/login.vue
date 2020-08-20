<template>
  <div class="login">
    <img class="logo" src="../assets/img/login/logo.png" alt="" />
    <div class="from">
      <p>工业互联专家 数字运营先锋</p>
      <el-input
        placeholder="请输入账号"
        prefix-icon="el-icon-user"
        v-model="userName"
      >
      </el-input>
      <el-input
        placeholder="请输入密码"
        prefix-icon="el-icon-lock"
        type="password"
        v-model="password"
      >
      </el-input>
      <div class="checkbox">
        <el-checkbox v-model="checked">记住密码</el-checkbox>
      </div>
      <div class="submit">
        <el-button type="primary" @click="submit">登陆</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      userName: '',
      password: '',
      checked: false
    };
  },
  components: {},
  methods: {
    submit() {
      let params = {
        userName: this.userName,
        sysFlag: 1,
        verCode: 'string',
        passWord: this.password
      };
      this.$axios({
        method: 'post',
        url: `/login`,
        data: params
      });
    }
  }
};
</script>
<style lang="less" scoped>
.logo {
  position: absolute;
  top: 3%;
  left: 3%;
  width: 180px;
}
.login {
  width: 100vw;
  height: 100vh;
  background: url('../assets/img/login/background.png');
  background-size: cover;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: center;
}
.from {
  width: 462px;
  height: 330px;
  background: rgba(107, 123, 245, 0.41);
  border-radius: 12px;
  text-align: center;
  p {
    font-size: 20px;
    color: white;
    margin-top: 40px;
    margin-bottom: 27px;
  }
}
.login /deep/ .el-input__inner {
  background: rgba(0, 0, 0, 0) !important;
  color: white;
}
.el-input {
  width: 70%;
  height: 45px;
  margin-bottom: 15px;
}
.checkbox {
  text-align: left;
  width: 70%;
  margin: auto;
  /deep/ .el-checkbox__label {
    color: #dcdfe6;
    font-weight: normal;
  }
}
.submit {
  width: 70%;
  margin: auto;
  margin-top: 10px;
  .el-button {
    width: 100%;
  }
}
</style>
