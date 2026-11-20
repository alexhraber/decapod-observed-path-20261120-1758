const assert = require('node:assert/strict');
const {canRead} = require(process.cwd() + '/src/access.cjs');
const repo = {id:'repo-a', organizationId:'org-a', ownerId:'owner-a'};
const member = {id:'member-a', organizationId:'org-a', active:true, repositoryIds:['repo-a']};
const cases = [
 ['explicit repository grant', member, true],
 ['repository owner', {...member,id:'owner-a',repositoryIds:[]}, true],
 ['missing repository grant', {...member,repositoryIds:[]}, false],
 ['grant for another repository', {...member,repositoryIds:['repo-b']}, false],
 ['foreign organization with matching grant', {...member,organizationId:'org-b'}, false],
 ['revoked membership', {...member,active:false}, false],
 ['revoked owner', {...member,id:'owner-a',active:false}, false],
 ['anonymous actor', null, false],
 ['missing active membership', {...member,active:undefined}, false],
 ['missing grants', {id:'member-a',organizationId:'org-a',active:true}, false]
];
for(const [name,actor,expected] of cases) assert.equal(canRead(actor,repo),expected,name);
console.log('10 independent repository authorization assertions passed');
