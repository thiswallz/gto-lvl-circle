# gto-lvl-circle

[![npm version](https://img.shields.io/npm/v/@gto/lvl-circle.svg?style=flat-square)](https://www.npmjs.com/package/@gto/lvl-circle)
[![npm downloads](https://img.shields.io/npm/dm/@gto/lvl-circle.svg?style=flat)](https://www.npmjs.com/package/@gto/lvl-circle)
[![dependency status](https://david-dm.org/thiswallz/@gto/lvl-circle.svg)](https://david-dm.org/thiswallz/ngx-skill-bar)

Beautiful and simple skill/progress circles.


You do not need any dependencies. It works with Angular x.

#### Examples

![Alt text](https://raw.githubusercontent.com/thiswallz/gto-lvl-circle/master/demos.png?raw=true 'Demos')


## Quick Start

### Install

```bash
npm i --save @gto/lvl-circle
```


### Import the module

```ts
// app.module.ts...
import { GtoLvlCircleComponent } from '@gto/lvl-circle';
// ...
@NgModule({
  imports: [
    //...
    GtoLvlCircleComponent
  ],
})
export class AppModule {}
```

### Use it!

```html
    <input [(ngModel)]="percentage"  type="number" />
    <gto-lvl-circle shadowColor="#323232" [colors]="['#e46fab', '#e046a5', '#e4408a']" 
        [percent]="percentage">
    </gto-lvl-circle>
```

### Properties

| Property | Type | Default |
| :---: | :---: | :---: |
| circles | number | 3 |

| circles | number | 3 |
| colors | string[] | [''white'',''white'','white'] |
| width | number | 120 |
| height | number | 120 |
| percent | number | 0 |
| stroke | number | 0 |
| shadowColor | string | gray |

## LIVE DEMO

[Demo on Stackblitz](https://stackblitz.com/edit/angular-gto-lvl-circle)

## Authors

- **Mauricio Joost Wolff** - _Initial work_ - [GitHub](https://github.com/thiswallz)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details