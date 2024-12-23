import React, { useState, useEffect } from "react";
import ProductPage from "./productPage";

function App() {
  const [category, setCategory] = useState("Basketball Gear"); // اختيار الفئة افتراضيًا كـ "Football"

  useEffect(() => {
    // هنا يمكنك إضافة الكود لتحميل البيانات من API أو أي شيء آخر
  }, [category]); // إذا كان لديك تأثيرات معتمدة على تغيير الفئة

  return (
    <div>
      {/* هنا يتم تمرير الفئة "Football" للمكون ProductPage */}
      <ProductPage category={category} />
    </div>
  );
}

export default App;
