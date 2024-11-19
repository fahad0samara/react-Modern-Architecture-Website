import React from 'react';

const Stats = () => {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">WE BELIEVE IN<br/>QUALITY</h2>
          <p className="text-zinc-400 max-w-2xl">
            60 days around the world, we'll find a pot of gold just sitting where the rainbow's ending. Time — we'll fight against the time, and we'll fly on the white wings of the wind.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-4xl font-bold mb-2">20K+</h3>
            <p className="text-zinc-400">Units Ready</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">50K+</h3>
            <p className="text-zinc-400">Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">40K+</h3>
            <p className="text-zinc-400">Projects</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">60K+</h3>
            <p className="text-zinc-400">Feedbacks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;