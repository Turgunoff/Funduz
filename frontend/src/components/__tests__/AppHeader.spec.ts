import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import AppHeader from '../AppHeader.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { i18n } from '../../i18n';

// Mock vue-i18n
const t = (key: string) => key;
const $t = vi.fn(t);

// Simple router setup for tests
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home</div>' } },
    { path: '/how-it-works', component: { template: '<div>How it works</div>' } },
    { path: '/community', component: { template: '<div>Community</div>' } },
    { path: '/login', component: { template: '<div>Login</div>' } },
    { path: '/create-project', component: { template: '<div>Create Project</div>' } },
  ],
});

describe('AppHeader.vue', () => {
  it('renders logo with correct text', async () => {
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn }), router, i18n],
        mocks: {
          $t
        }
      },
    });

    expect(wrapper.text()).toContain('FUNDUZ');
  });

  it('renders navigation links', () => {
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn }), router, i18n],
        mocks: {
          $t
        }
      },
    });

    // Check if nav links are present (keys from i18n)
    expect(wrapper.text()).toContain('nav.about');
    expect(wrapper.text()).toContain('nav.community');
  });

  it('shows login button when not logged in', () => {
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              auth: { isLoggedIn: false }
            },
            createSpy: vi.fn
          }),
          router,
          i18n
        ],
        mocks: {
          $t
        }
      },
    });

    expect(wrapper.text()).toContain('nav.login');
  });
});
