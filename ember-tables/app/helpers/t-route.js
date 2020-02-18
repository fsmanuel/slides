import { helper } from '@ember/component/helper';

export default helper(function tRoute(parts) {  
  return ['routes', parts.join('.')].join('.');
});
