App({
  onLaunch() {
    const users = wx.getStorageSync('users') || [];
    if (users.length === 0) {
      // 初始化默认用户（测试用）
      wx.setStorageSync('users', [
        { phone: '13800138000', password: '123456', name: '测试老人' }
      ]);
    }
  }
});