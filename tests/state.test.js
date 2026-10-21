import {test} from 'node:test';import assert from 'node:assert/strict';import {collect,restore} from '../state.js';
const ids=['hiro','kanji','letterA'];const fresh=()=>({found:[],startedAt:0,finishedAt:null});
test('requires order and ignores duplicates and unknown markers',()=>{let s=fresh();assert.equal(collect(s,'kanji',ids,10),s);assert.equal(collect(s,'bad',ids,10),s);s=collect(s,'hiro',ids,10);assert.equal(collect(s,'hiro',ids,20),s);assert.deepEqual(s.found,['hiro'])});
test('only third distinct ordered marker finishes game',()=>{let s=fresh();for(let i=0;i<3;i++){s=collect(s,ids[i],ids,100+i);assert.equal(s.finishedAt,i===2?102:null)}assert.equal(s.startedAt,100);assert.deepEqual(restore(JSON.stringify(s),ids),s)});
test('corrupt or out-of-order storage cannot unlock treasure',()=>{for(const raw of ['broken','null','{}',JSON.stringify({...fresh(),found:['kanji']}),JSON.stringify({...fresh(),found:ids})])assert.deepEqual(restore(raw,ids),fresh())});
