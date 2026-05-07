import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState(""); // 검색 상태 추가

  // 검색 먼저 필터링, 그 다음 정렬
  const filteredProducts = products
    .filter((p) => p.name.includes(search)) // 이름에 검색어 포함된 것만
    .sort((a, b) => {
      if (sort === "lowToHigh") return a.price - b.price;
      if (sort === "highToLow") return b.price - a.price;
      return 0;
    });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">전체 상품</h2>

        <div className="flex gap-3">
          {/* 검색창 */}
          <input
            type="text"
            placeholder="상품 검색..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />

          {/* 정렬 드롭다운 */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="default">기본순</option>
            <option value="lowToHigh">낮은 가격순</option>
            <option value="highToLow">높은 가격순</option>
          </select>
        </div>
      </div>

      {/* 검색 결과 없을 때 */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 py-16">
          검색 결과가 없습니다.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}