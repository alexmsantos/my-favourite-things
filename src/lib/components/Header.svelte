<script>
  import { blogMetaData } from "$lib/blogMetaData";
</script>

<header class="header">
  <a href="/" class="header__title">{blogMetaData.blogTitle}</a>
</header>

<style>
  .header {
    height: 6rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .header__title {
    margin-left: 1rem;
    color: var(--main-color);
    text-decoration: none;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 6.2rem;
  }

  .header__links {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
  }

  .header__links_item {
    margin-left: 1rem;
  }

  .header__links_item:last-child {
    margin-right: 1rem;
  }

  .header__links__item__link {
    padding-bottom: 0.2rem;
    color: var(--secondary-color);
    text-decoration: none;
  }

  .header__links__item__link:hover {
    border-bottom: 1.5px solid var(--secondary-color);
  }
</style>
