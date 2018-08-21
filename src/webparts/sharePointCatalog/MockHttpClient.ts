import {ISPList} from './SharePointCatalogWebPart';

export default class MockHttpClient
{
    private static _items: ISPList[] = [{Title: "Mock List 1",Id:'1', Url:"http://www.google.com.br", ImageUrl:"http://files.cod3r.com.br/curso-web/curso1.jpg", Desc:"Mock Description 123 test 123 tst description 123 desc test 123 tst 123 desc description"},
                                        {Title: "Mock List 2",Id:'2', Url:"http://www.google.com.br", ImageUrl:"http://files.cod3r.com.br/curso-web/curso2.jpg", Desc:"Mock Description 123 test 123 tst description 123 desc test 123 tst 123 desc description"},
                                        {Title: "Mock List 3",Id:'3', Url:"http://www.google.com.br", ImageUrl:"http://files.cod3r.com.br/curso-web/curso1.jpg", Desc:"Mock Description 123 test 123 tst description 123 desc test 123 tst 123 desc description"},
                                        {Title: "Mock List 4",Id:'3', Url:"http://www.google.com.br", ImageUrl:"http://files.cod3r.com.br/curso-web/curso2.jpg", Desc:"Mock Description 123 test 123 tst description 123 desc test 123 tst 123 desc description"},
                                        {Title: "Mock List 5",Id:'3', Url:"http://www.google.com.br", ImageUrl:"http://files.cod3r.com.br/curso-web/curso1.jpg", Desc:"Mock Description 123 test 123 tst description 123 desc test 123 tst 123 desc description"},
                                        {Title: "Mock List 6",Id:'3', Url:"http://www.google.com.br", ImageUrl:"http://files.cod3r.com.br/curso-web/curso2.jpg", Desc:"Mock Description 123 test 123 tst description 123 desc test 123 tst 123 desc description"},
                                        {Title: "Mock List 7",Id:'3', Url:"http://www.google.com.br", ImageUrl:"http://files.cod3r.com.br/curso-web/curso1.jpg", Desc:"Mock Description 123 test 123 tst description 123 desc test 123 tst 123 desc description"}];


    public static get(){
        return MockHttpClient._items;
    }
}