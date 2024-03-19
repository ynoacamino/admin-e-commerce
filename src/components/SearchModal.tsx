'use client';

import * as React from 'react';
import {
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import algoliasearch from 'algoliasearch/lite';
import { Button } from './ui/button';
import ProductCard from './ui/ProductCard';

const searchClient = algoliasearch('WIBFBYZYZN', '0327e13df4497a05c6db93789d13cb63');

const client = searchClient.initIndex('e-commerce-ynoacamino');

export default function SearchModal() {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [products, setProducts] = React.useState<any[]>([]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((op) => !op);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    setInput(e.target.value);

    const { hits } = await client.search(e.target.value, {
      hitsPerPage: 2,
    });

    setProducts(hits);
  };
  return (
    <>
      <Button variant="outline" size="sm" className="justify-start" onClick={() => setOpen(true)}>
        <MagnifyingGlassIcon className="w-5 h-5 md:mr-4" />
        <span className="min-w-32 text-start hidden md:flex">
          Buscar productos...
        </span>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl bg-accent">
          <DialogHeader>
            <DialogTitle>Busca tu producto favorito</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="border-primary rounded-sm border bg-background flex h-14 items-center">
              <MagnifyingGlassIcon className="w-10 h-10 p-1" />
              <input type="text" name="" id="" className="appearance-none bg-transparent border-0 flex-1 text-xl h-full focus-visible:outline-none pl-1 text-primary" onChange={handleChange} value={input} />
            </div>
            <div className="flex flex-col gap-2">
              {
                products.map((p) => (
                  <ProductCard
                    product_brand={p.product_brand}
                    product_id={p.product_id}
                    product_image={p.product_image}
                    product_name={p.product_name}
                    product_price={p.product_price}
                    key={crypto.randomUUID()}
                  />
                ))
              }
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>

  );
}
