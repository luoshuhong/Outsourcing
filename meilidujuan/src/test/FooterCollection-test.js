/**
 * Created by liunickluck on 15/7/23.
 */
describe('test footer collection',function(){
    it('show return true',function(){
        require(['collections/FooterCollection'],function(FooterCollection){
            var col = FooterCollection.getInstance();
            col.fetch({
                async:false,
                success:function(res){
                    console.log(res);
                    expect(res.length).toBe(0);
                }
            });
        });
    });
});