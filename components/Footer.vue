<template>
  <div class="footer">
    <div class="contain hidden-sm-and-down">
      <el-row class="footer-line1">
        <el-col :span="4">联系我们</el-col>
        <el-col :span="4">快速入口</el-col>
        <el-col :span="4">服务帮助</el-col>
        <el-col :span="4">热门产品与服务</el-col>
        <el-col :span="4">关于我们</el-col>
        <el-col :span="4">关注COSMOPlat</el-col>
      </el-row>
      <hr style=" height:2px;border:none;border-top:2px solid #444444;" />
      <el-row class="footer-line2">
        <el-col :span="4">
          <div class="looper-p">致电 4001357277</div>
          <div class="looper-p">邮件:support@cosmoplat.com</div>
          <div class="looper-p">时间 9am - 6pm</div>
          <div class="looper-p">建议与反馈</div>
        </el-col>
        <el-col :span="4">
          <div>
            <a class="looper-p" href="https://market.cosmoplat.com/">应用市场</a>
          </div>
          <div>
            <a class="looper-p" href="https://www.cosmoplat.com/college/">智研院</a>
          </div>
          <div>
            <a class="looper-p" href="https://www.cosmoplat.com/solution/">行业解决方案</a>
          </div>
        </el-col>
        <el-col :span="4">
          <!-- <div class="looper-p">常见FAQ</div> -->
          <div>
            <a class="looper-p" href="http://developer.dev.cosmoplat.com/">实用工具</a>
          </div>
          <div>
            <a class="looper-p" href="http://doc.dev.cosmoplat.com/">新手课堂</a>
          </div>
          <div>
            <a class="looper-p" href="http://developer.dev.cosmoplat.com/">开发者社区</a>
          </div>
        </el-col>
        <el-col :span="4">
          <div>
            <a class="looper-p" href="https://market.cosmoplat.com/item/8700.html">COSMO-MES</a>
          </div>
          <div>
            <a class="looper-p" href="https://market.cosmoplat.com/item/13770.html">COSMO-WMS</a>
          </div>
          <div>
            <a class="looper-p" href="https://market.cosmoplat.com/item/7732.html">COSMO-APS</a>
          </div>
          <div>
            <a class="looper-p" href="https://market.cosmoplat.com/item/13740.html">COSMO-RRS</a>
          </div>
        </el-col>
        <el-col :span="4">
          <div>
            <a class="looper-p" href="https://www.cosmoplat.com/platform/plat/">平台介绍</a>
          </div>
          <div>
            <a class="looper-p" href="https://www.cosmoplat.com/platform/company/">团队介绍</a>
          </div>
          <div>
            <a class="looper-p" href="https://cosmoplat.com/platform/plat/">大事记</a>
          </div>
          <div>
            <a class="looper-p" href="https://www.cosmoplat.com/platform/company/">联系我们</a>
          </div>
        </el-col>
        <el-col :span="4">
          <img src="https://cosmoplat.com/assets/images/header/header-wechat.png">
        </el-col>
      </el-row>
      <hr style=" height:2px;border:none;border-top:2px solid #444444;" />
      <el-row class="footer-line3">
        <el-col :span="4" class="hhh1">相关链接</el-col>
        <el-col :span="4">
          <div>
            <a class="looper-p-p" href="http://diy.haier.com/">DIY众创汇</a>
          </div>
          <div>
            <a class="looper-p-p" href="http://www.haierfinancial.com/">产业金融</a>
          </div>
        </el-col>
        <el-col :span="4">
          <div>
            <a class="looper-p-p" href="http://l.ihaier.com/">海达源</a>
          </div>
          <div>
            <a class="looper-p-p" href="http://www.haier.net/cn/">海尔官网</a>
          </div>
        </el-col>
        <el-col :span="4">
          <div>
            <a class="looper-p-p" href="http://www.haieruplus.com/index.htm">海尔U+</a>
          </div>
          <div>
            <a class="looper-p-p" href="http://www.ehaier.com/">海尔商城</a>
          </div>
        </el-col>
        <el-col :span="4">
          <div>
            <a class="looper-p-p" href="http://hope.haier.com/">海尔HOPE</a>
          </div>
          <div>
            <a class="looper-p-p" href="https://maker.haier.net/">人才超市</a>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="looper-p-p">双创孵化</div>
        </el-col>
      </el-row>
      <hr style=" height:2px;border:none;border-top:2px solid #444444;" />
    </div>
    <div class="bq">
      <div>Copyright ©2017海尔数字科技版权所有
        <a href="http://www.miibeian.gov.cn/" target="_blank" style="text-decoration: underline;">沪ICP备17042923</a>
      </div>
    </div>
    <div class="recordcode hidden-sm-and-down">
      <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011702004474" target="_blank">
        <i></i>
        沪公网安备31011702004474号
      </a>
    </div>
    <div class="hidden-sm-and-up" style="text-align: center;">
      <img src="https://cosmoplat.com/assets/images/header/header-wechat.png" height="48" width="48">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  width: 100%;
  background: #333333;
  color: #999;
  .bq {
    text-align: center;
    font-size: 12px;
  }
  .contain {
    width: 1200px;
    margin: 0 auto;
    padding: 20px 0 10px 0;
    .footer-line1 {
      padding: 10px 0;
      font-size: 20px;
    }
    .footer-line2 {
      padding: 24px 0;
      .looper-p {
        font-size: 12px;
        line-height: 20px;
      }
    }
    .footer-line3 {
      padding: 16px 0;
      .hhh1 {
        font-size: 16px;
      }
      .looper-p-p {
        font-size: 12px;
        padding: 4px 0;
      }
    }
  }
  a {
    color: #999;
  }
  .recordcode {
    padding-top: 6px;
    height: 16px;
    line-height: 16px;
    padding-bottom: 40px;
    text-align: center;
    a {
      font-size: 12px;
      color: #999;
      text-decoration: underline;
      i {
        display: inline-block;
        width: 14px;
        height: 16px;
        margin-right: 6px;
        background: url(https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superlanding/cosmoimg/icon_police_2763990.png?v=md5)
          0 0 no-repeat;
        vertical-align: middle;
        margin-top: -4px;
      }
    }
  }
}
</style>
