export function collect(state, id, ids, now=Date.now()) {
 if (!ids.includes(id) || state.found.includes(id) || ids[state.found.length] !== id) return state;
 const found=[...state.found,id];
 return {...state, found, startedAt:state.startedAt || now, finishedAt:found.length===ids.length ? now : null};
}
export function restore(raw, ids) {
 try { const s=JSON.parse(raw); if(!s || !Array.isArray(s.found) || !s.found.every((id,i)=>id===ids[i]) || s.found.length>ids.length || !Number.isFinite(s.startedAt) || s.startedAt<0 || s.startedAt>Date.now() || (s.finishedAt!==null && (!Number.isFinite(s.finishedAt) || s.finishedAt<s.startedAt || s.finishedAt>Date.now())) || (s.found.length===ids.length && !s.finishedAt) || (s.found.length<ids.length && s.finishedAt)) throw Error(); return s; } catch { return {found:[],startedAt:0,finishedAt:null}; }
}
