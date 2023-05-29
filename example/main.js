import './main.css';
import { setPrefix, set, get, remove, clear } from "../src/main";

setPrefix('MOE_');

function setupOnSet() {
  const setKey = document.querySelector('#setKey');
  const setValue = document.querySelector('#setValue');
  const setExpires = document.querySelector('#setExpires');
  const setIsEncry = document.querySelector('#setIsEncry');
  const setConfirm = document.querySelector('#setConfirm');
  
  setConfirm?.addEventListener('click', () => {
    const key = setKey?.value;
    const value = setValue?.value;
    if (!key) {
      alert('请输入KEY');
      return;
    }
    if (!value) {
      alert('请输入VALUE');
      return;
    }
    set(key, value, {
      encrypt: !!setIsEncry.checked,
      expires: setExpires?.value ? Number(setExpires?.value) : 0,
    })
  })
}

function setupOnGet() {
  const getKey = document.querySelector('#getKey');
  const getValue = document.querySelector('#getValue');
  const getConfirm = document.querySelector('#getConfirm');

  getConfirm?.addEventListener('click', () => {
    const key = getKey?.value;
    if (!key) {
      alert('请输入KEY');
      return;
    }
    const value = JSON.stringify(get(key));
    getValue.value = value;
  })
}

setupOnSet()
setupOnGet()
