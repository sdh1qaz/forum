package com.my.blog.website.service.impl;

import java.util.Collection;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.Queue;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 * @ClassName： HistoryQueue
 * 
 * @Author: dhSu
 * @Description: 存储最近浏览的10篇文章
 * @Date:Created in 2019年1月8日
 */
@Service
public class HistoryQueue<E> implements Queue<E> {

	// 队列长度
	//@Value("${history.limit}")
	private int limit;

	Queue<E> queue = new LinkedList<E>();

	public HistoryQueue() {
		super();
		this.limit = 20;
	}

	/**
	 * 入队
	 * 
	 * @param e
	 */
	@Override
	public boolean offer(E e) {
		if (queue.size() >= limit) {
			// 如果超出长度，入队前先出队
			queue.poll();
		}
		return queue.offer(e);
	}

	/**
	 * 出队
	 * 
	 * @return
	 */
	@Override
	public E poll() {
		return queue.poll();
	}

	/**
	 * 获取队列
	 * 
	 * @return
	 */
	public Queue<E> getQueue() {
		return queue;
	}

	/**
	 * 获取限制的大小
	 * 
	 * @return int
	 */
	public int getLimit() {
		return limit;
	}

	@Override
	public boolean add(E e) {
		return queue.add(e);
	}

	@Override
	public E element() {
		return queue.element();
	}

	@Override
	public E peek() {
		return queue.peek();
	}

	@Override
	public boolean isEmpty() {
		return queue.size() == 0 ? true : false;
	}

	@Override
	public int size() {
		return queue.size();
	}

	@Override
	public E remove() {
		return queue.remove();
	}

	@Override
	public boolean addAll(Collection<? extends E> c) {
		return queue.addAll(c);
	}

	@Override
	public void clear() {
		queue.clear();
	}

	@Override
	public boolean contains(Object o) {
		return queue.contains(o);
	}

	@Override
	public boolean containsAll(Collection<?> c) {
		return queue.containsAll(c);
	}

	@Override
	public Iterator<E> iterator() {
		return queue.iterator();
	}

	@Override
	public boolean remove(Object o) {
		return queue.remove(o);
	}

	@Override
	public boolean removeAll(Collection<?> c) {
		return queue.removeAll(c);
	}

	@Override
	public boolean retainAll(Collection<?> c) {
		return queue.retainAll(c);
	}

	@Override
	public Object[] toArray() {
		return queue.toArray();
	}

	@Override
	public <T> T[] toArray(T[] a) {
		return queue.toArray(a);
	}
	
	/*public static void main(String[] args) {
		HistoryQueue<String> historyQueue = new HistoryQueue<String>(10);
		historyQueue.offer("1");
		historyQueue.offer("2");
		historyQueue.offer("3");
		historyQueue.offer("4");
		historyQueue.offer("5");
		historyQueue.offer("6");
		historyQueue.offer("7");
		historyQueue.offer("8");
		historyQueue.offer("9");
		historyQueue.offer("10");
		historyQueue.offer("11");
		
		for(String st : historyQueue.getQueue()) {
			System.out.println(st);
		}
	}*/

}
