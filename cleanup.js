// 1. Go to https://soundcloud.com/you/following
// 2. Load all users that you follow (scroll to the end of the page until list is fully loaded) 
// 3. Open javascript console.
// 4. Paste & hit <enter>
(() => {
  // Time to sleep between requests in ms
  const sleepMin = 500;
  const sleepMax = 1000;

  async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
  }

  async function unfollow() {
    const $badges = document.querySelectorAll('.userBadgeListItem');
    const badgesCount = $badges.length;

    for (let i = 0; i < badgesCount; i++) {
      const $badge = $badges[i]
      const $title = $badge.querySelector('.userBadgeListItem__heading');
      const $button = $badge.querySelector('.sc-button-follow');

      const title = $title.innerText;

      if ($button) {
        console.log("[%s/%s] Unfollowing \"%s\"", i + 1, badgesCount, title);
        $button.click();
        await sleep(Math.floor(Math.random() * (sleepMax - sleepMin + 1)) + sleepMin);
      } else {
        console.warn("[%s/%s] Already unfollowed \"%s\"", i + 1, badgesCount, title);
      }
    }

    console.log("Done");
  }

  unfollow();
})();
