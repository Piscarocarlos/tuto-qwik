import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const Header = component$(() => {
  return <>
    <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tab-index="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tab-index="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href='/'>Acceuil</Link></li>
        <li>
          <a href=''>Parent</a>
          <ul class="p-2">
            <li><a href=''>Submenu 1</a></li>
            <li><a href=''>Submenu 2</a></li>
          </ul>
        </li>
        <li><Link href='/contact'>Contact</Link></li>
      </ul>
    </div>
    <a href='' class="btn btn-ghost text-xl">TutoApp</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><Link href='/'>Accueil</Link></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="p-2">
            <li><a href=''>Submenu 1</a></li>
            <li><a href=''>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><Link href='/contact'>Contact</Link></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a href='' class="btn">Button</a>
  </div>
</div>
  </>
});