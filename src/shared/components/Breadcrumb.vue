<!-- components/Breadcrumb.vue -->
<template>
  <div v-if="breadcrumbs.length > 0">
    <nav class="bg-light-cream">
      <ol class="breadcrumb-list" v-if="breadcrumbs.length > 1">
        <li
          v-for="(crumb, index) in breadcrumbs"
          :key="index"
          class="breadcrumb-item"
          :class="{ active: index === breadcrumbs.length - 1 }"
        >
          <!-- Icon nếu có -->
          <i v-if="crumb.icon" :class="['breadcrumb-icon', crumb.icon]"></i>

          <!-- Link cho các item không phải cuối cùng -->
          <router-link
            v-if="index < breadcrumbs.length - 1"
            :to="crumb.path"
            class="breadcrumb-link text-brand-blue breadcrumb-current"
            style="text-decoration: underline; !important"
          >
            {{ crumb.name }}
          </router-link>

          <span v-else class="breadcrumb-current" style="margin-left: -15px"
            >• {{ crumb.name }}
          </span>

          <!-- Separator -->
          <span v-if="index < breadcrumbs.length - 1" class="breadcrumb-separator">
            <i class="fa fa-chevron-right"></i>
          </span>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    data() {
      return {
        // Dữ liệu động cho breadcrumb (ví dụ: tên sản phẩm)
        dynamicData: {},
      };
    },
    computed: {
      breadcrumbs() {
        const matched = this.$route.matched;
        const breadcrumbs = [];

        // Luôn thêm Home làm item đầu tiên (trừ khi đang ở trang chủ)
        if (this.$route.name !== 'Home') {
          breadcrumbs.push({
            name: 'Trang chủ',
            path: '/',
            icon: 'fa fa-home',
          });
        }

        matched.forEach((route, index) => {
          if (route.meta && route.meta.breadcrumb) {
            let breadcrumbName = route.meta.breadcrumb;

            // Xử lý breadcrumb động
            if (route.meta.dynamicBreadcrumb) {
              if (typeof route.meta.dynamicBreadcrumb === 'function') {
                breadcrumbName = route.meta.dynamicBreadcrumb(this.$route);
              } else {
                // Lấy tên động từ data hoặc API
                breadcrumbName = this.getDynamicBreadcrumb(route);
              }
            }

            breadcrumbs.push({
              name: breadcrumbName,
              path: this.buildPath(route, matched.slice(0, index + 1)),
              icon: route.meta.icon ? `fa ${route.meta.icon}` : null,
            });
          }
        });

        return breadcrumbs;
      },
    },
    methods: {
      buildPath(route, matchedRoutes) {
        // Xây dựng đường dẫn đầy đủ với params
        let path = route.path;

        // Thay thế params trong path
        Object.keys(this.$route.params).forEach((key) => {
          path = path.replace(`:${key}`, this.$route.params[key]);
        });

        return path;
      },

      getDynamicBreadcrumb(route) {
        // Xử lý breadcrumb động dựa vào route name
        switch (route.name) {
          case 'ProductDetail':
            return this.dynamicData.productName || 'Chi tiết sản phẩm';
          case 'Category':
            return this.dynamicData.categoryName || `Danh mục ${this.$route.params.categoryId}`;
          default:
            return route.meta.breadcrumb;
        }
      },

      // Phương thức để cập nhật dữ liệu động từ component cha
      updateDynamicData(data) {
        this.dynamicData = { ...this.dynamicData, ...data };
      },
    },

    // Lắng nghe thay đổi route để reset dữ liệu động
    watch: {
      $route: {
        handler() {
          // Reset dữ liệu động khi chuyển route
          this.dynamicData = {};
        },
        immediate: true,
      },
    },
  };
</script>

<style scoped>
  .breadcrumb {
    background-color: #f8f9fa;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    margin-bottom: 1rem;
  }

  .breadcrumb-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  .breadcrumb-item {
    display: flex;
    align-items: center;
  }

  .breadcrumb-item.active {
    color: #6c757d;
  }

  .breadcrumb-icon {
    margin-right: 0.5rem;
    font-size: 0.875rem;
  }

  .breadcrumb-link {
    color: #007bff;
    text-decoration: none;
    padding: 0.25rem 0;
    transition: color 0.2s;
  }

  .breadcrumb-link:hover {
    color: #0056b3;
    text-decoration: underline;
  }

  .breadcrumb-current {
    color: #6c757d;
    font-weight: 500;
  }

  .breadcrumb-separator {
    margin: 0 0.5rem;
    color: #6c757d;
    font-size: 0.75rem;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .breadcrumb {
      padding: 0.5rem;
    }

    .breadcrumb-item {
      font-size: 0.875rem;
    }

    .breadcrumb-separator {
      margin: 0 0.25rem;
    }
  }
</style>
