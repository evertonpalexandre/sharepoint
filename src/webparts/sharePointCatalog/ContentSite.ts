import * as $ from 'jquery';
import { ISPList, ISPLists } from '../../../lib/webparts/sharePointCatalog/SharePointCatalogWebPart';

export default class ContentSite
{
    ContentSite(){}
    public getContent(_absoluteUrl:string){
        console.log('getcontent');
        return new Promise((resolve, reject) =>{
            
            $.ajax({
                url: _absoluteUrl+ `/_api/lists/getbytitle('Cards')/items?$orderby=Id`,
                method: "GET",
                headers: { "Accept": "application/json; odata=verbose" },
                success: function (data) {
                    var array:ISPList[] = new Array();
                    
                    if (data.d.results.length > 0 ) {
                        data.d.results.forEach(element => {
                            
                            var itemList:ISPList = {
                                Title: element.Title,
                                Id: element.Id,
                                ImageUrl:element.ImageUrl.Url,
                                Url:element.Url.Url,
                                Desc: element.Desc
                            };
                        //array.push({Title:element.Title,Id:element.Id, ImageUrl: element.ImageUrl.Url, Url:element.Url.Url, Desc:element.Desc});
                        array.push(itemList);
                    });
                    resolve(array);
                 }
                    
                },
                error: function (data) {
                    reject(data);
                }
        });
    });
    }

    
}