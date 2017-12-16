/**
 * Created by mt on 2017-12-15.
 */
$(function () {
//列表
  $('.qx-list-content').on('click','.details',function () {
    var self = $(this).parent();
    if(self.hasClass('open')){
      self.removeClass('open');
      $(this).html('详情');
      self.next().slideDown();
      self.parents('li').find('.u-cont').slideUp()
    }else {
      self.addClass('open').parents().siblings().find('h2').removeClass('open');
      $(this).html('<span class="back-icon"></span>')
        .parents('li').siblings().find('.details').html('详情');
      self.next().slideUp().parents().siblings().find('.update-time').slideDown();
      self.parents('li').find('.u-cont').slideDown().parents().siblings().find('.u-cont').slideUp()
    }
  });
//  scrollbar
  $(".qx-list-content").mCustomScrollbar({
    theme:"minimal"
  });

})
