function showContact(seller, phone = "Not provided") {
        alert("Seller: " + seller + "\nContact: " + phone);
 }
 function filterItems() {
    const semester = document.getElementById("filterSemester").value;
    const branch = document.getElementById("filterBranch").value;
    const price = document.getElementById("filterPrice").value;
    let visibleCount = 0;

    for (const card of document.querySelectorAll(".menu .item")) {
        const item = card.dataset;

        const semesterMatch = semester === "all" || item.semester === semester;

        const branchMatch = branch === "all" ||
                            item.branch === "all" ||
                            item.branch.split(" ").includes(branch);

        let priceMatch = true;

        if (price === "free") {
            priceMatch = item.price === "free" || item.price === "donation";
        }

        if (price === "under300") {
            priceMatch = item.price !== "" && Number(item.price) < 300;
        }

        card.hidden = !(semesterMatch && branchMatch && priceMatch);

        if (!card.hidden) visibleCount++;
    }

    document.getElementById("noResults").hidden = visibleCount > 0;
}