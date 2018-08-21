import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SharePointCatalogWebPart.module.scss';
import * as strings from 'SharePointCatalogWebPartStrings';
import MockHttpClient from './MockHttpClient';
import ContentSite from './ContentSite';
import {
  SPHttpClient,
  SPHttpClientResponse   
 } from '@microsoft/sp-http';
 import {
  Environment,
  EnvironmentType
 } from '@microsoft/sp-core-library';
 import * as $ from 'jquery';

 

export interface ISharePointCatalogWebPartProps {
  listUrl: string;
  ascending: boolean;
  view: string;
  fields: string;

}

export interface ISPLists {
  value: ISPList[];
 }
 
 export interface ISPList {
  Title: string;
  Id: string;
  Url: string;
  ImageUrl: string;
  Desc: string;
 }



export default class SharePointCatalogWebPart extends BaseClientSideWebPart<ISharePointCatalogWebPartProps> {
  public render(): void {

    this.domElement.innerHTML = `
     <div class="${ styles.sharePointCatalog }">
        <main id="gridmain" class="${styles.grid2}">
        </main>
     </div>`;

     this._renderListAsync();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  private _getMockListData() {
    return MockHttpClient.get();
  }

  private _renderListAsync(): void {
    // Local environment
    var arrayReturn;
    if (Environment.type === EnvironmentType.Local) {
        this._renderList(this._getMockListData());
    }
    else if(Environment.type == EnvironmentType.SharePoint || Environment.type == EnvironmentType.ClassicSharePoint){
        var _content = new ContentSite();
        _content.getContent(this.context.pageContext.web.absoluteUrl)
          .then((array) =>{
            console.log(array);
            this._renderList(array);
          })
          .catch(data => alert("Error " +data));
        
    }
  }

  private _renderList(items): void {
    let html: string = '';
    items.forEach((item) => {
      html += `
      <article>
        <img src="${item.ImageUrl}" alt="Sample photo">
        <div class=${styles.text}>
           <h3>${item.Title}</h3>
           <p>${item.Desc}</p>
           <a href="${item.Url}"><button>Detalhes</button></a>
        </div>
      </article>
      `;
    });
 
    const listContainer: Element = this.domElement.querySelector('#gridmain');
    listContainer.innerHTML = html;
  }


  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('listUrl', {
                  label: 'listUrl'
                }),
                PropertyPaneToggle('ascending', {
                  label: 'Ascendente',
                  onText: 'On',
                  offText: 'Off'
                }),
                PropertyPaneTextField('view', {
                  label: 'View'
                }),
                PropertyPaneTextField('fields', {
                  label: 'fields'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
