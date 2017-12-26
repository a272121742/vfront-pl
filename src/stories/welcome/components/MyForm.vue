<template>
  <Form ref="loginForm" :model="user">
    <FormItem>
    <h3>加载MyForm.vue文件</h3>
    </FormItem>
    <FormItem prop="name">
      <Input v-model="user.name" placeholder="请输入用户名">
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="user.password" placeholder="请输入密码">
      </Input>
    </FormItem>
    
    <FormItem>
      <Button type="primary">登陆</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  data () {
    return {
      user: {
        name: 'example@haocang.com',
        password: '12345678'
      }
    };
  },
  methods: {
    
  }
};
</script>